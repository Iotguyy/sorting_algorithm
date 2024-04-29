export async function generateStaticParams() {
  // Fetch your data source, for example, a list of algorithms
  const response = await fetch('https://your-api-url.com/algorithms'); // Replace with your actual API URL
  const data = await response.json();

  // Map your data to params
  return data.map(item => {
    return {
      algoCategory: item.category,
      algoId: item.id,
    }
  });
}
  // Map your data to params
  return data.map(item => {
    return {
      params: {
        algoCategory: item.category,
        algoId: item.id
      }
    };
  });
}

// This function will be called by Next.js to render the page at the paths returned by generateStaticParams
export default function AlgorithmPage({ params }) {
  // You can use the params to fetch data specific to that page or pass it to the page component
  const { algoCategory, algoId } = params;
  // ...
}
