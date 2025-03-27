class Car {
    public brand: string;
    private speed: number;
    protected color: string;

    constructor(brand: string, speed: number, color: string) {
        this.brand = brand;
        this.speed = speed;
        this.color = color;
    }

    getSpeed() {
        return this.speed;
    }
}