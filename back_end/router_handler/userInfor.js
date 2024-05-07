const db = require('../db/index')

exports.getAllInfor = (req, res) => {
    const sql = 'select * from user_infor'
    db.query(sql, (err, results) => {
        if(err)
            return res.output(err)
        res.output('Success!', 0, results)
    })
}

exports.getNameById = (req, res) => {
    const sql = 'select name from user_infor where id=?';
    db.query(sql, req.body.id, (err, results) => {
        if(err)
            return res.output(err)
        if(results.length !== 1)
            return res.output('No data!')
        res.output('Success!', 0, results)
    })
}