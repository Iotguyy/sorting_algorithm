import { generateStaticParams } from './generateStaticParams'
import AlgorithmPage from './AlgorithmPage'

interface IParams {
  params: {
    algoCategory: string;
    algoId: string;
  };
}

const AlgorithmsLayout: React.FC<IParams> = ({ params }) => {
  return <AlgorithmPage params={params} />
}

export { generateStaticParams }
export default AlgorithmsLayout
