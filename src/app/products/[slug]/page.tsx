type Props = {
    params: {
        slug: string;
    }
}
function Pants({params}:Props) {
    return (
        <h1>{params.slug}</h1>
    )
}

export default Pants;
