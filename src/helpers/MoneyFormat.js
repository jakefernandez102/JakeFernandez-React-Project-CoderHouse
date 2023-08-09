export function formatMoney ( ammount )
{

    const options = {
        style: 'currency',
        currency: 'CRC'
    };
    const selectedAmmount = ammount?.toLocaleString( 'es-CR', options );

    return selectedAmmount;
}