export function makePet(name, type, age, food, toys) {
    return {
        name,
        type,
        age,
        food,
        toys
    };
}

export function formatWork(book) {
    let formattedWork = {
        work: book.book.title,
        writer: `${book.author.first} ${book.author.last}`
    };
    return formattedWork;
}