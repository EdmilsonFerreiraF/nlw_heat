
import { serverHttp } from "./app"

const PORT = 4000
serverHttp.listen(PORT, () => console.log(`Server running on port ${PORT}`))