function jsGame(name, computer, select, machineSelect) {

    let ganador, ganadorEscoge, perdedorEscoge

    if (select === 'piedra' && (machineSelect === 'tijeras' || machineSelect === 'lagartija')) {
        ganador = name
        ganadorEscoge = select
        perdedorEscoge = machineSelect
    } else if (select === 'tijeras' && (machineSelect === 'papel' || machineSelect === 'lagartija')) {
        ganador = name
        ganadorEscoge = select
        perdedorEscoge = machineSelect
    } else if (select === 'papel' && (machineSelect === 'piedra' || machineSelect === 'spock')) {
        ganador = name
        ganadorEscoge = select
        perdedorEscoge = machineSelect
    } else if (select === 'lagartija' && (machineSelect === 'paper' || machineSelect === 'spock')) {
        ganador = name
        ganadorEscoge = select
        perdedorEscoge = machineSelect
    } else if (select === 'spock' && (machineSelect === 'piedra' || machineSelect === 'tijeras')) {
        ganador = name
        ganadorEscoge = select
        perdedorEscoge = machineSelect
    } else if (select === machineSelect) {
        ganador = 'none'
        ganadorEscoge = 'nothing'
        perdedorEscoge = 'nothing'
    } else {
        ganador = computer
        ganadorEscoge = machineSelect
        perdedorEscoge = select
    }

    return (result = { ganador, ganadorEscoge, perdedorEscoge })
}