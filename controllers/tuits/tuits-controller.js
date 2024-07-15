import * as tuitsDao from '../tuits/tuits-dao.js';

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    try {
        const deleteTuit = await tuitsDao.deleteTuit(tuitdIdToDelete);
        if (deleteResult.deletedCount === 1) {
            const status = { success: true, message: 'Tuit deleted successfully' };
            res.json(status);
        } else {
            const status = { success: false, message: 'Tuit not found' };
            res.json(status);
        }
    } catch (error) {
        const status = { success: false, message: 'Failed to delete tuit', error: error.message };
        res.json(status);
    }
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


