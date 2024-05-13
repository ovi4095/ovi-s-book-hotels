import React from 'react'
import '../../css/Category.css'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const CategoryList = (props) => {
  return (
    <div className='CategoryHolder'>
        {props.category.map(category => {
            return (
                <div className='CategoryContainer' key={category.id}>
                    <Link
                        to='/rooms'
                        state={{category:category.name}}
                    >
                        <Card inverse>
                            <CardImg
                                alt={category.name}
                                src={category.image}
                                style={{
                                    height: 270,
                                }}
                                width="100%"
                            />
                            <CardImgOverlay>
                            <CardTitle tag="h1"
                                style={{color:'#fff', 
                                        backgroundColor: '#8a9ba96b', 
                                        padding: '1rem', 
                                        marginTop: '4rem',
                                        borderRadius: 12
                                        }}
                            >
                                {category.name}
                            </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryList