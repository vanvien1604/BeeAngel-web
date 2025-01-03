import Top_item_tour from "./top_item_tour"
function Top_list_tour() {
    return <>
        <div className="main-list-tour main-list-top-tour">
            <div className="box-list-tour">
                <div className="tieuDe-tour">
                    <h2>Top Tour Trong Tháng</h2>
                </div>
                <div className="line-tour"></div>

                <div className="list-top-tour">
                    <Top_item_tour />
                   
                 
                </div>
            </div>
        </div>
    </>
}

export default Top_list_tour
