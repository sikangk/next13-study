type Props = {
    params: {
        slug: string;
    }
}

function Pants({params}: Props) {
    return (
        <h1>{params.slug}</h1>
    )
}

// 특정 slug를 ssg로 하려면
export function generateStaticParams() {
    const products = ['pants', 'skirt'];
    return products.map(product => ({slug: product}))
}

export default Pants;


