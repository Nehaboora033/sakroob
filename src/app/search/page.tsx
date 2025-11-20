"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FilteredProducts from "@/components/FilteredProducts";

const SearchPage: React.FC = () => {
    const params = useSearchParams();
    const query = params.get("query")?.toLowerCase() || "";

    return (
        <div className="p-10 max-w-[1140px] mx-auto">
            <h1 className="font-semibold mb-6">
                Showing results for: {`"${query}"`}
            </h1>

            <Suspense fallback={<p>Loading products...</p>}>
                <FilteredProducts query={query} />
            </Suspense>
        </div>
    );
};

const SuspendedSearchPage: React.FC = () => (
    <Suspense fallback={<div>Loading page...</div>}>
        <SearchPage />
    </Suspense>
);

export default SuspendedSearchPage;
