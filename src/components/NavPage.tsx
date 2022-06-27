import { Button } from "react-bootstrap";

 interface INavPageProps {
    page: number
    setPage: (page: number) => void
}

export default function NavPage({ page, setPage }: INavPageProps) {
    return <>
        <div className="mx-3 d-flex justify-content-between align-items-center">
            <p>Page: {page}</p>
            <Button
                onClick={() => setPage(page + 1)}
                variant="primary" size="sm">
                <>Page {page + 1}</>
            </Button>
        </div>
    </>;
}
