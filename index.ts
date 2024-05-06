/*
* This program runs with the vehicle class.
*
* @author  Evgeny Vovk
* @version 1.0
* @since   2024-04-30
*/

import { Truck } from "./Truck"
import { Bike } from "./Bike"

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadence to 10\n')
bmx.cadence = 10
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()

const truck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
truck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
truck.accelerate(10, 10)
console.log('New speed: ' + truck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
truck.accelerate(10, 10)
console.log('New speed: ' + truck.speed)

console.log('\nApplyed air pressure of 10:')
truck.applyAir(10)
console.log('New speed: ' + truck.speed)

console.log('\nDone.')
