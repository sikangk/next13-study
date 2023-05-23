import {getProduct, getProducts} from "@/service/protucts";
import notFound from "@/app/not-found";

type Props = {
    params: {
        slug: string;
    }
}
export const revalidate = 3;

// 동적으로 바뀌는 metadata
export function generateMetadata({params}: Props) {
    return {
        title: `제품의 이름 ${params.slug}`
    }
}

async function Pants({params : {slug}}: Props) {
    const product = await getProduct(slug);

    if(!product){
        notFound();
    }
    return (
        <h1>{product?.name} 상세 페이지</h1>
    )
}

// 특정 slug를 ssg로 하려면
export async function generateStaticParams() {
    const products = await getProducts();
    return products.map(product => ({slug: product.id}))
}

export default Pants;


