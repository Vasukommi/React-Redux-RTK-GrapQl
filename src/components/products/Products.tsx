import { useGetProductsQuery } from "../../store/api/apiSlice"

import { ColorRing } from 'react-loader-spinner'


const Products = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery("");


    const renderSpinner = () => {
        return (
            <>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </>
        )
    }

    const renderProducts = (Products: any) => {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                {Products.map((data: any) => (
                    <div style={{
                        height: "400px",
                        width: "500px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "start",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                        overflow: "hidden",
                        borderRadius: "12px",
                        margin: "20px"
                    }}>
                        <h1 style={{
                            fontSize: '20px'
                        }}>
                            {data.title}
                        </h1>
                        <img style={{ height: "200px", width: "200px" }} src={data.image} alt="product" />
                        <p>
                            {data.description}
                        </p>
                        <h3>{data.price}</h3>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <div>
                {isLoading && renderSpinner()}
                {isSuccess && <>Request Success !!</>}
                {!isLoading && renderProducts(data)}
            </div>
        </div>
    )
}

export default Products