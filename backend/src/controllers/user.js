import { Router } from 'express'
import { listItem, createItem, deleteItem, updateItem } from '../services/user'
import { v4 as uuidv4 } from 'uuid';

const router = Router()

router.get('/', async (req, res) => {
    const userList = await listItem()
    res.send(userList)
})

router.post('/', async (req, res) => {
    try {
        const idUnico = uuidv4()
        const body = req.body
        body.id = idUnico
        const user = await createItem(body)
        res.status(201).send(user)
    } catch (err) {
       res.status(400).send(err) 
    }
})

router.delete('/:userId', async (req, res) => {
    await deleteItem(req.params.userId)
    res.send()
})

router.put('/:userId', async (req, res) => {
    await updateItem(req.params.userId, req.body)
    res.send()
})



export default router