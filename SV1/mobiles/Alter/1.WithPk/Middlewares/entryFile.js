const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || typeof LocalBody !== 'object' || Array.isArray(LocalBody)) {
        return res.status(400).send("Request body must be a valid object.");
    }

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    const { Key: LocalKey, Value: LocalValue } = LocalBody;

    if (LocalKey === undefined || LocalKey === null || LocalKey === '') {
        return res.status(400).send("'Key' field is required and cannot be empty.");
    }

    if (LocalValue === undefined || LocalValue === null) {
        return res.status(400).send("'Value' field is required.");
    }

    next();
};

export { StartFunc };
