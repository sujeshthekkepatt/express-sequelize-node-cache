const app = require("express")()
const { widget, sequelize } = require("./src/models/")
const NodeCache = require("node-cache")


const nodeCache = new NodeCache({ stdTTL: 360, maxKeys: 10, useClones: false })

const PORT = 8000;


app.get('/', (req, res) => {

    console.info(`REQ: ${req.path}`);
    res.end("hello world");
});




app.get('/widgets/:id', async (req, res) => {

    if (nodeCache.get(req.params.id)) {
        res.setHeader('n-cache-status', "HIT")

        res.send(nodeCache.get(req.params.id));

    }
    else {
        let data = await widget.findOne({
            where: { widgetId: req.params.id }
        })
        data = JSON.stringify(data);
        nodeCache.set(req.params.id, data);
        res.setHeader('n-cache-status', "MISS")
        res.send(data);
    }
});



app.listen(PORT, () => {
    console.info(`SERVER STARTED@${PORT}`);
})

