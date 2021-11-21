export default class Countdown{

    constructor(futureDate){
        this.futureDate = futureDate
    }

    get _actualDate(){
        return new Date()
    }

    get _futureDate(){
        return new Date(this.futureDate)
    }

    get _timeStampDiff(){
        return Math.abs(this._actualDate.getTime() - this._futureDate.getTime())
    }
    get days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
    }
    get horas(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000))
    }
    get min(){
        return Math.floor(this._timeStampDiff / (60 * 1000))
    }
    get sec(){
        return Math.floor(this._timeStampDiff / 1000)
    }

    get total(){
        const days = this.days < 10 ? "0" + this.days : this.days
        const horas = this.horas %24 < 10 ? "0" + (this.horas % 24) : this.horas % 24
        const min = this.min %60 < 10 ? "0" + (this.min % 60) : this.min % 60
        const sec = this.sec %60 < 10 ? "0" + (this.sec % 60) : this.sec % 60

        return[days, horas, min, sec]
    }


}