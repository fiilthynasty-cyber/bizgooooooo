import queue

class JobQueue:
    def __init__(self):
        self.queue = queue.Queue()

    def add_job(self, job):
        self.queue.put(job)

    def get_job(self):
        return self.queue.get()

    def task_done(self):
        self.queue.task_done()