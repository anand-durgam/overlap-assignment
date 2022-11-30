
const array = [
    {name: 'a', timeInterval: ['9:00','9:30']},
    {name: 'b', timeInterval: ['9:30','9:45']},
    {name: 'c', timeInterval: ['9:40','9:55']},
    {name: 'd', timeInterval: ['9:56','10:15']},
    {name: 'e', timeInterval: ['10:10','10:25']},
    {name: 'f', timeInterval: ['10:20','10:40']},
    {name: 'g', timeInterval: ['10:45','11:10']},
    {name: 'h', timeInterval: ['10:55','11:20']},
]

let totalTimeSpent = 0

for(let i of array){
    
    // start time calculations
    let startTime = i.timeInterval[0]
    startTime = startTime.split(':')
    const start_time_part_1 = parseInt(startTime[0])
    const start_time_part_2 = parseInt(startTime[1])
    
    const startTimeInMinutes = start_time_part_1 * 60
    const startTotalTime = startTimeInMinutes + start_time_part_2
    
    // end time calculations
    let endTime = i.timeInterval[1]
    endTime = endTime.split(':')
    const end_time_part_1 = parseInt(endTime[0])
    const end_time_part_2 = parseInt(endTime[1])
    
    const endTimeInMinutes = end_time_part_1 * 60
    const endTotalTime = endTimeInMinutes + end_time_part_2
    
    if(array.indexOf(i) === 0){
        const totalInterval = endTotalTime - startTotalTime
        totalTimeSpent = totalTimeSpent + totalInterval
    }else{
        const prev_index = array.indexOf(i) - 1 
        let prev_end_time = array[prev_index].timeInterval[1]
        prev_end_time = prev_end_time.split(':')
        const prev_part_1 = parseInt(prev_end_time[0])
        const prev_part_2 = parseInt(prev_end_time[1])
        
        if(start_time_part_1 >= prev_part_1){
            if(start_time_part_2 > prev_part_2){
                const totalInterval = endTotalTime - startTotalTime
                totalTimeSpent = totalTimeSpent + totalInterval
            }else{
                const prevEndTimeInMin = (prev_part_1 * 60) + prev_part_2
                const diff_in_prev_and_curr = prevEndTimeInMin - startTotalTime
                const totalInterval = endTotalTime - startTotalTime - diff_in_prev_and_curr
                totalTimeSpent = totalTimeSpent + totalInterval
            }
        }else{
            const prevEndTimeInMin = (prev_part_1 * 60) + prev_part_2
            const diff_in_prev_and_curr = prevEndTimeInMin - startTotalTime
            const totalInterval = endTotalTime - startTotalTime - diff_in_prev_and_curr
            totalTimeSpent = totalTimeSpent + totalInterval
        }
    }
    
    
}

console.log(totalTimeSpent)









