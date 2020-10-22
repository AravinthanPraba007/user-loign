import React from 'react'
import { connect } from 'react-redux'
import ItemRedux from './ItemRedux'


function ItemListRedux({ items }) {

    return (
        items.map(item => {
            return <ItemRedux key={item.id} item={item} />
        }
        )

    )
}

const mapStateToProps = state => {
    return { items: state.items }
}



export default connect(
    mapStateToProps

)
    (ItemListRedux)
