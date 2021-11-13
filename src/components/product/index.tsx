import React from 'react';
import useStyles from '../../styles'
import { store, addItem } from '../../store'
import { ProductItem, Props } from '../../types';
import { ButtonBase, Typography } from '@material-ui/core';

const ProductContainer: React.FC<Props> = ({ products }) => {

    const classes = useStyles();

    return (
        <div className={classes.productRoot}>
            {products.map((product: ProductItem) => (
                <ButtonBase
                    focusRipple
                    key={product.id}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    disabled={product.added}
                    onClick={() => store.dispatch(addItem(product))}
                    style={{
                        width: `${100 / products.length}%`
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${product.imageUrl})`
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {product.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div>
    )
}

export default ProductContainer
