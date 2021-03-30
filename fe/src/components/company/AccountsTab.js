import {Card} from "react-bootstrap";


export default function AccountsTab() {
    return (
        <div className={'p-3'}>
            <Card className={'mt-3'} style={{backgroundColor: 'purple', maxWidth: 400}} body>
                <h2>Connect your bank account information</h2>
            </Card>

            <Card className={'mt-5'} style={{backgroundColor: 'orange', maxWidth: 400}} body>
                <h2>Connect to AAVE</h2>
            </Card>
        </div>
    )
}