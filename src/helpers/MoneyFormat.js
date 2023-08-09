
export function formatMoney ( ammount )
{
    const options = {
        style: 'currency',
        currency: 'CRC',
    };
    const formatedAmmount = ammount.toLocaleString( 'es-CR', options );
    return formatedAmmount;
} 