import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inPk, inBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  let LocalReturnObject = { KTF: false };
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const pk = String(inPk);

    if (!(pk in data)) {
      LocalReturnObject.KReason = `Record not found with pk: '${inPk}'.`;
      return LocalReturnObject;
    }

    const { Key, Value } = inBody;

    if (!Key || Value === undefined) {
      LocalReturnObject.KReason = `Both 'Key' and 'Value' must be provided in the body.`;
      return LocalReturnObject;
    }

    data[pk][Key] = Value;

    data[pk]["pk"] = Number(inPk);

    delete data[pk].Key;
    delete data[pk].Value;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Updated '${Key}' for pk: '${inPk}' successfully.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
