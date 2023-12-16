import './index.css'


const bookcard = props=>{
    const {bookcardItems} = props
    const {no,books} = bookcardItems
    return (
        <li className='book-card'>
            <h1 className='book-card-heading'>No : {no}</h1>
            <div className='main-values-container'>
            <div className='books-container'>
                <p className='books'>Horror : {books.horror}</p>
                <p className='books'>action: {books.action}</p>
            </div>
            <div className='books-container'>
                <p className='books'>Rating : {books.rating}</p>
                <p className='books'>review : {books.review}</p>
            </div>
            </div>
        </li>
    )

}


export default bookcard