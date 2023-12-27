import { useQuery, useLazyQuery } from "@apollo/client";
import { getLocations } from "../../store/api/graphQlApi";

const Locations = () => {
    // const { loading, error, data } = useQuery(getLocations);
    const [getLoacation, { loading, error, data, refetch }] = useLazyQuery(getLocations);
    // fetchPolicy: 'network-only', // Doesn't check cache before making a network request
    // nextFetchPolicy: 'cache-first',


    const renderError = (error: any) => {
        return (
            <p>Error: {error?.message}</p>
        )
    }

    const renderLoading = (loading: any) => {
        return (
            <p>loading...</p>
        )
    }

    const renderLoacation = (data: any) => {
        debugger
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                {data.locations.map(({ id, name, description, photo }: any) => (
                    <div key={id} style={{
                        width: "300px",
                        height: "200px"
                    }}>
                        <h3>{name}</h3>
                        <img width="200" height="100" alt="location-reference" src={`${photo}`} />
                        <br />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            {loading && renderLoading(error)}
            {error && renderError(loading)}
            {data && renderLoacation(data)}
            <div>
                <button onClick={() => getLoacation()}>
                    Get Data
                </button>
            </div>
            <div>
                <button onClick={() => refetch()}>
                    Refetch Data
                </button>
            </div>
        </>
    )
}

export default Locations;