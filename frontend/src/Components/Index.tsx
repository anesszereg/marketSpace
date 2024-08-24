import React, { useState } from "react";
import CatalogCollection from "Pages/Catalog/CatalogCollection";
import Filters from "Pages/Catalog/Filters";
import { filterProduct } from "Common/data";

const Index = ({ name, cxxl, clg, cmd,cxl }: any) => {
    const [filterList, setFilterlist] = useState<any>(filterProduct);
    return (
        <React.Fragment>
            <Filters
                setFilterlist={setFilterlist}
                name={name}
            />
            <CatalogCollection
                filterList={filterList}
                cxxl={cxxl}
                clg={clg}
                cmd={cmd}
                cxl={cxl}
            />
        </React.Fragment>
    );
}

export default Index;