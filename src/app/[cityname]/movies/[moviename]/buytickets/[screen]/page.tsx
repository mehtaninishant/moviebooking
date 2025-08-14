"use client"
import React from 'react'
import './SelectSeat.css'
import Link from 'next/link';

const page = () => {

    const movie = {
        moviename: 'Yodha',
        screen: '4Dx',
        date: new Date(),
        language: 'Hindi',
        type: 'Action/Thriller',
        screens: [
            {
                name: 'Screen 1',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 2',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 3',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            }
        ]
    }

    const screen={

        name:'Screen 1',
        location: 'PVR Cinema, Forum Mall, Koramangala',
        timeslots:[
            {
                time: '10:00 AM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'G',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'F',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'D',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'C',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'A',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:150
                    }
                ]
            },

            {
                time: '4:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'G',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'F',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'D',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'C',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'A',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:150
                    }
                ]
            },
            {
                time: '8:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'G',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'F',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:500
                    },
                    {
                        type: 'gold',
                        rows: [
                            {
                                rowname: 'E',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'D',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'C',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:300
                    },
                    {
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            },
                            {
                                rowname: 'A',
                                cols:[
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    },
                                    {
                                        seats:[
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'1'
                                            },
                                            {
                                                type:'seat',
                                                status:'available',
                                                seat_id:'2'
                                            },
                                            {
                                                type:'seat',
                                                status:'not-available',
                                                seat_id:'3'
                                            }
                                        ]
                                    }
                                ]

                            }
                        ],
                        price:150
                    }
                ]
            }
        ]
    }

    const generateSeatLayout=()=>{
        const x = screen.timeslots.findIndex((t: any) => t.time === selectedTime.time)
        return screen.timeslots[x].seats.map((seatType,index)=>(
            <div className='seat-type' key={index}>
                <h2>{seatType.type} - Rs. {seatType.price}</h2>

                <div className="seat-rows">
                    {
                        seatType.rows.map((row,rowIndex)=>(
                            <div className="seat-row" key={rowIndex}>
                                <p className="rowname">{row.rowname}</p>

                                <div className="seat-cols">
                                    {
                                        row.cols.map((col,colIndex)=>(
                                            <div className="seat-col" key={colIndex}>
                                                {col.seats.map((seat,seatIndex)=>(
                                                    <div key={seatIndex}>
                                                        {
                                                            seat.status == 'available' &&
                                                            <span className={
                                                                selectedSeats.find((s: any) => {
                                                                    s.row === row.rowname &&
                                                                    s.seat_id === seat.seat_id &&
                                                                    s.col === colIndex
                                                            }) ? "seat-selected" : "seat-available"
                                                            }
                                                            onClick={() => selectdeselectseat({
                                                                row: row.rowname,
                                                                col: colIndex,
                                                                seat_id: seat.seat_id,
                                                                price: seatType.price
                                                            })}
                                                            >
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                        {
                                                            seat.status == 'not-available' &&
                                                            <span className='seat-unavailable'
                                                            
                                                            >
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
    }

    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([

        {
            "row": "D",
            "col": 1,
            "seat_id": "5",
            "price": 300
        },
        {
            "row": "D",
            "col": 1,
            "seat_id": "6",
            "price": 300
        },
    ])
    const selectdeselectseat = (seat: any) => {
        // console.log(seat)
        const isselected = selectedSeats.findIndex((s:any)=>{
            return s.row===seat.row && s.col===seat.col && s.seat_id===seat.seat_id
        })

        if(isselected){
            setSelectedSeats(selectedSeats.filter((s:any)=> s.seat_id !== seat.seat_id))
        }
        else
        {
            setSelectedSeats([...selectedSeats,seat])
        }
        
    }
  return (
    <div className='selectseatpage'>
        <div className='s1'>
        <div className='head'>
            <h1>{movie.moviename} - {movie.language}</h1>
            <h3>{movie.type}</h3>
        </div>
       </div>

       <div className="selectseat">
         <div className='timecont'>
            {screen.timeslots.map((time: any,index: number) => (
                <h3
                    className={selectedTime.time=== time.time ? 'time selected'
                        : 'time'}

                        onClick={() => {
                            setSelectedTime(time)
                            // setSelectedTime([])
                        }}
                        key={index}
                >
                    {time.time}
                </h3>
            ))}
         </div>
         <div className='indicators'>
             <div>
                <span className='seat-unavailable'></span>
                <p>Not available</p>
             </div>
             <div>
                <span className='seat-available'></span>
                <p>Available</p>
             </div>
             <div>
                <span className='seat-selected'></span>
                <p>Selected</p>
             </div>
         </div>
         {generateSeatLayout()}
         <div className='totalcont'></div>
       </div>  
    </div>    
  )
}

export default page