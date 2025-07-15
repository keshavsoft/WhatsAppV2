const CommonColumnsArray = ["Key", "Value"];

const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || typeof LocalBody !== 'object' || Array.isArray(LocalBody)) {
        return res.status(400).send("Request body must be a non-array object.");
    }

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    const incomingKeysSorted = Object.keys(LocalBody).sort();
    const requiredKeysSorted = CommonColumnsArray.sort();

    const isExactMatch =
        incomingKeysSorted.length === requiredKeysSorted.length &&
        incomingKeysSorted.every((key, index) => key === requiredKeysSorted[index]);

    if (!isExactMatch) {
        return res.status(400).send(`Request body must contain exactly these keys: [${CommonColumnsArray.join(", ")}]`);
    }

    next();
};

export { StartFunc };
