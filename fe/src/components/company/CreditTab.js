import {Button, Card} from "react-bootstrap";


export default function CreditTab() {
    return (
        <div className={'credit-tab p-3'}>
            <Card className={'bank-card mt-3'} style={{backgroundColor: 'purple', maxWidth: 400}} body>
                <h4>Connect to your bank</h4>
                <Button>Add Account</Button>
            </Card>

            <Card className={'aave-card mt-5'} style={{backgroundColor: 'orange', maxWidth: 400}} body>
                <h4>Connect to AAVE</h4>
                <Button>Add Account</Button>
            </Card>
        </div>
    )
}