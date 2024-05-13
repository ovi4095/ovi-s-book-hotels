import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actionCreators'
import CategoryList from './CategoryList'
import Loading from '../loading/Loading'

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        loading: state.categories.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
}

export const Category = (props) => {
    useEffect(() => {
        props.fetchCategories();
    },[])

    const categoryList = <CategoryList category={props.categories}/>
    const category  = props.loading === true? (<Loading/>):categoryList;
  return (
    <div>{category}</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)