import { Router } from "express";
import Table from '../table';

let router = Router();
let blogsTable = new Table('Blogs');

router.get('/:id?', (req, res) => {
    if (req.params.id) {
        blogsTable.getOne(req.params.id)
            .then(results => res.send(results))
            .catch(e => res.send(e));
    } else {
        blogsTable.getAll()
            .then(results => res.send(results))
            .catch(e => res.send(e));
    }

});

router.put('/:id', (req, res) => {
    blogsTable.update(req.params.id, req.body)
    .then(results => res.send(results))
    .catch(e => res.send(e));
});

router.delete('/:id', (req, res) => {
    blogsTable.delete(req.params.id)
        .then(results => res.send(results))
        .catch(e => res.send(e));
});

// router.find('/:id', (req, res) => {
//     blogsTable.find(req.params.id)
//     //will come back 
// });

router.post('/', (req, res) => {
    blogsTable.insert(req.body)
    .then(results => res.send(results))
    .catch(e => res.send(e));
})

export default router;