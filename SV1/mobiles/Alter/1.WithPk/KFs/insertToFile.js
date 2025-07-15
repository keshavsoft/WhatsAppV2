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

    const LocalUpdateData = { ...data[pk], ...inBody, pk: Number(inPk) };
    data[pk] = LocalUpdateData;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Record updated successfully with pk: '${inPk}'.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
