export function ajaxRequest(url) {
    return fetch(
            url,
            { method: 'GET' }
        )
            .then( responseText => responseText.json() )
            .then( responseParsed => responseParsed )
            .catch( error => console.error('Ajax request error:', error) );
}
