import Loading from "../../components/ui/Loading"
import Table from "../../components/table/Table"
import useAdmin from "../../hooks/admin/useAdmin"

const Admin = () => {
    const { data, role, logs, loading, error } = useAdmin()

    return (
        <>
            {loading && <Loading />}
            {!loading && (!data || data.length === 0) && (
                <p className='text-center'>{error}</p>
            )}
            {!loading && data && data.length > 0 &&
                (
                    <>
                        <h2 className="text-xl font-semibold text-center">Active users</h2>
                        <Table data={data} />
                        <h2 className="text-xl font-semibold text-center">Available Roles</h2>
                        <Table data={role} />
                        <h2 className="text-xl font-semibold text-center">Product Logs</h2>
                        <Table data={logs} />
                    </>

                )
            }
        </>
    )
}

export default Admin