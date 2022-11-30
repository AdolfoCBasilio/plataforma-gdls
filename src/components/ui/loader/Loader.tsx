interface LoaderProps {
    loader?: string
}

const Loader = ({loader="https://gifburg.com/images/gifs/loading/webp/0016.webp"}:LoaderProps) => {
    return (
        <img loading="lazy" src={loader} alt="loader" />
    )
}

export default Loader