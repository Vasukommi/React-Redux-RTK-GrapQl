import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../../store/api/graphQlApi";

const AddTodo = () => {
    let input: any;
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

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

    const renderTodo = (data: any) => {
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addTodo({ variables: { type: input.value } });
                        input.value = '';
                    }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }

    return (
        <>
            {loading && renderLoading(loading)}
            {error && renderLoading(error)}
            {renderTodo(data)}
        </>
    );
}

export default AddTodo;