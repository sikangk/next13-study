type Props = {
    params: {
        slug: string;
    }
}

// 동적으로 바뀌는 metadata
export function generateMetadata({params}: Props) {
    return {
        title: `제품의 이름 ${params.slug}`
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


