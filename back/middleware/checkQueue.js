import BuildingQueue from "../models/buildingModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";
import Town from "../models/townModel.js";
import upgrade from "./upgrade.js";

export default setInterval(async function () {
  const checkQueueLength = await BuildingQueue.countDocuments({});

  if (checkQueueLength > 0) {
    const thatTime = new Date();
    const queue = await BuildingQueue.find({});
    queue.forEach(async (el) => {
      if (thatTime > el.buildingTime) {
        if (el.building == "sawmill") {
          const sawmill = await Sawmill.findById({ _id: el.buildingId });
          const town = await Town.findById({ _id: el.id });
          upgrade(town, sawmill);

          await Sawmill.findOneAndUpdate(
            { _id: el.buildingId },
            { building: false, finishTime: 0 }
          );

          await BuildingQueue.deleteOne({ _id: el._id });
        } else if (el.building == "stoneMine") {
          const stoneMine = await StoneMine.findById({ _id: el.buildingId });
          const town = await Town.findById({ _id: el.id });
          upgrade(town, stoneMine);

          await StoneMine.findOneAndUpdate(
            { _id: el.buildingId },
            { building: false, finishTime: 0 }
          );

          await BuildingQueue.deleteOne({ _id: el._id });
        } else if (el.building == "ironOreMine") {
          const ironOreMine = await IronOreMine.findById({
            _id: el.buildingId,
          });
          const town = await Town.findById({ _id: el.id });
          upgrade(town, ironOreMine);

          await IronOreMine.findOneAndUpdate(
            { _id: el.buildingId },
            { building: false, finishTime: 0 }
          );

          await BuildingQueue.deleteOne({ _id: el._id });
        }
      } else {
      }
    });
  }
}, 5000);
