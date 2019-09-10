const db = require('./db');

module.exports = class Book {

    static async getById(id) {
        const book = await db.query('select * from Books where id = ?', [id]);
        return book[0][0];

    }

    static async add(data) {
        const res = await db.query('INSERT INTO `Books` (`title`, `date`, `author`, `description`, `image`)' +
            ' VALUES (?,?,?,?,?)', [
            data.title,
            data.date,
            data.author,
            data.description,
            data.image
        ]);

        return res[0].insertId;
    }

    static async edit(id, data) {
        const updatedBook = await db.query(`update Books set     
        title = coalesce(?, Books.title),
        date = coalesce(?, Books.date),
        author = coalesce(?, Books.author),
        description = coalesce(?, Books.description),
        image = coalesce(?, Books.image)
        where id = ?;`,
            [
                data.title,
                data.date,
                data.author,
                data.description,
                data.image,
                id
            ]);

        return updatedBook;

    }

    static async list(options) {

        let sql = `select * from Books`;

        options || (options = {});

        //add where
        options.where && (sql = `${sql} where ${options.where}`);

        //add where
        options.order && (sql = `${sql} order by ${options.order}`);

        //add limit and offset
        options.offset || (options.offset = 0);
        options.limit || (options.limit = 5);

        sql = `${sql} limit ${options.offset}, ${options.limit}`;

        console.log(sql);

        const books = await db.query(sql);

        return books[0];

    }
}
