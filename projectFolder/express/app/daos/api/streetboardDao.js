const con = require("../../config/dbconfig")

const streetboardDao = {
    table:"items",

    findAll:(res,table)=>{
        con.execute(
            `SELECT i.id, i.item_name, br.board_type, b.brand, i.item_image
            FROM items AS i
            INNER JOIN board_type AS br
            INNER JOIN brand AS b
            ON i.brand = b.brand_id AND br.board_type_id = i.board_type
            WHERE i.board_type = 1`,
            (error,rows)=>{
                console.log(rows)
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO find all ERROR`, error)
                }
            }
        )
    },

    create:(req,res)=>{
        if(Object.keys(req.body).length === 0){
            res.json({
                "error": true,
                "message":"No fields to create"
            })
        } else{
            const fields = Object.keys(req.body) //creates a array
            const values = Object.keys(req.body)
            con.execute(
                `INSERT INTO user_data set ${fields.join(' = ? , ')} =?`,
                    values,
                    (error, dbres) => {
                        if (!error) {
                            res.send(`last id: ${dbres.insertId}`)
                        } else {
                            console.log(`DAO ERROR`, error)
                            res.send('ERROR Createing record')
                        }
                    }
            )
        }
    },
    update:(req,res)=>{
        if(isNaN(req.params.id)){
            res.json({
                "error":true,
                "message":"Id must be a number."

            })
        } else if(Object.keys(req.body).length === 0){
            res.json({
                "error":true,
                "message":"No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                // STRING, ARRAY, CALLBACK
                `UPDATE customer SET ${fields.join(' = ?, ')} = ? WHERE customer_id = ?`,
                [...values, req.params.id],
                (error, dbres)=>{
                    if(!error){
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else{
                        console.log(`DAO ERROR`, error)
                            res.send('ERROR Createing record')
                    }
                }
            )
        }
    },

    sort:(req,res)=>{
        con.execute(
            `SELECT * FROM customer ORDER BY last_name, first_name`,
            [req.body],
            (error, rows)=>{
                if(!error){
                    if(rows.length === 1){
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else{
                    console.log(`DAO ERROR`, error)
                }
            }
        )
    }

}

module.exports = streetboardDao