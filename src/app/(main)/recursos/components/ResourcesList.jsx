import ResourceItem from "./ResourceItem"

const ResourcesList = ({ data }) => {
    return (
        <section>
            <div className="mb-4" role="list" >

                {data?.list?.length == 0 ?
                    <h2>Quedate atento a los recursos que vamos a estar compartiendo.</h2>
                    :
                    (
                        data?.map(item => <ResourceItem key={item.id} data={item} />)
                    )
                }

            </div>
        </section>
    )
}

export default ResourcesList
