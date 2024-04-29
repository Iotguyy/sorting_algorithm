"use client";

import { useFilters } from "@/hooks/useFilters";
import Filters from "@/components/shared/filters";
import SortingController from "@/components/algorithms/sorting-algorithms/sorting-controller";
import BubbleSortInfo from "@/components/algorithms/sorting-algorithms/bubble-sort/bubble-sort-info";
import SelectionSortInfo from "@/components/algorithms/sorting-algorithms/selection-sort/selection-sort-info";
import InsertionSortInfo from "@/components/algorithms/sorting-algorithms/insertion-sort/insertion-sort-info";
import MergeSortInfo from "@/components/algorithms/sorting-algorithms/merge-sort/merge-sort-info";

// Define the IParams interface with the correct types for AlgoCategory and AlgoId
export async function generateStaticParams() {
  // Fetch your data source, for example, a list of algorithms
  const data = await fetchData('/api/algorithms'); // Replace with your actual data fetching logic

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


