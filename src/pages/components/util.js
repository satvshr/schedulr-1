//contains shared functions thats gonna be shared across all components
// import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth
    // in gogle calendar we have 5 rows and 6 columns to represent every day of the week
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++ //whenever we fill a value we are going to increase
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })  
    return daysMatrix
}