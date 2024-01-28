const experienceSpan = document.getElementById("experience")

if (experienceSpan) {
  const yearsExperience = parseFloat(experienceSpan.innerHTML)
  
  const toYears = (): string => {
    return yearsExperience + ` ${yearsExperience > 1 ? "years" : "year"}`
  }

  const toMonths = (): string => {
    return (Math.round(yearsExperience * 12)) + ` months`
  }
  
  const toDays = (): string => {
    return (Math.round(yearsExperience * 12 * 30)) + ` days`
  }

  const toHours = (): string => {
    return (Math.round(yearsExperience * 12 * 30 * 24)) + ` hours`
  }

  const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

  const write = async (message: string): Promise<void> => {
    experienceSpan.innerHTML = ""
    for (const letter of message) {
      await delay(200)
      experienceSpan.innerHTML += letter
    }
  }

  const eraseWord = async (message: string): Promise<void> => {
    const length = message.length;
    if (length > 0) {
      for (let i = 0; i < message.length; i++) {
        await delay(100)
        experienceSpan.innerHTML = message.substring(0, length - i);
      }
    }
  }

  const initChangeExperienceMeasure = async (): Promise<void> => {
    const punter = document.getElementById("punter")
    const time = 5000
    
    const inYears = toYears()
    const inMonths = toMonths()
    const inDays = toDays()
    const inHours = toHours()

    const writeAndErase = async (message: string) => {
      await write(message)
      punter?.classList.add("is-activeAnimation")
      await delay(time);
      punter?.classList.remove("is-activeAnimation")
      await eraseWord(message)
    }

    await writeAndErase(inYears)
    await writeAndErase(inMonths)
    await writeAndErase(inDays)
    await writeAndErase(inHours)

    initChangeExperienceMeasure()
  };

  initChangeExperienceMeasure()
}