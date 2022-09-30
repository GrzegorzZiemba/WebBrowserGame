import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		requried: true,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		requried: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Please provide valid email");
			}
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 9,
		trim: true,
	},
	town: { type: mongoose.Types.ObjectId, ref: "Town" },

	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

userSchema.pre("save", async function (next) {
	const user = this;
	console.log(user);
	console.log("Pre  " + user.password);
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	console.log("Generate ", this);
	const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_JWT);

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

userSchema.statics.loginUser = async (email, password) => {
	const user = await User.findOne({ email });
	console.log(user);
	if (!user) {
		throw new Error("Cannot login");
	}

	const checkPass = await bcrypt.compare(password, user.password);
	console.log(checkPass);
	if (!checkPass) {
		console.log(password);
		console.log(user.password);
		throw new Error("Cannot login");
	}

	return user;
};

const User = mongoose.model("User", userSchema);

export default User;
