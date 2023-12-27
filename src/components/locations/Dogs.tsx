import { useQuery, useLazyQuery  } from "@apollo/client";
import { GET_DOG_PHOTO } from "../../store/api/graphQlApi";

const Dogs = () => {
    const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
        variables: { breed: "dalmatian" },
        pollInterval: 0,
    });
    

    const renderError = (error: any) => {
        return (
            <div>
                renderError
                <p>{error.message}</p>
                <button onClick={() => refetch()}>
                    Refetch new breed!
                </button>
            </div>
        )
    }

    const renderLoader = (loading: any) => {
        return (
            <div>
                loading...
            </div>
        )
    }

    const renderImage = (data: any) => {
        return (
            <div>
                <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
                <button onClick={() => refetch()}>
                    Refetch new breed!
                </button>
            </div>
        )
    }

    return (
        <>
            {error && renderError(error)}
            {loading && renderLoader(loading)}
            {data && renderImage(data)}
        </>
    );
}

export default Dogs;