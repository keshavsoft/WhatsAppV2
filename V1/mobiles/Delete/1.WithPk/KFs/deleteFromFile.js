import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inKey }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  let LocalReturnObject = { KTF: false };
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.JsonData = `key: ${inKey} not found. File does not exist.`;
      return LocalReturnObject;
    }

    let data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const pk = String(inKey);

    if (!(pk in data)) {
      LocalReturnObject.KReason = `No record found with pk: ${inKey}`;
      return LocalReturnObject;
    }

    delete data[pk];

    Object.keys(data).forEach(key => {
      data[key] = Object.fromEntries(
        Object.entries(data[key]).filter(([_, value]) => value !== null)
      );
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Deleted successfully with pk: ${inKey}`;
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
